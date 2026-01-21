'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2386<T> = T extends (infer U)[]
  ? DeepReadonlyArray2386<U>
  : T extends object
  ? DeepReadonlyObject2386<T>
  : T;

interface DeepReadonlyArray2386<T> extends ReadonlyArray<DeepReadonly2386<T>> {}

type DeepReadonlyObject2386<T> = {
  readonly [P in keyof T]: DeepReadonly2386<T[P]>;
};

type UnionToIntersection2386<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2386<T> = UnionToIntersection2386<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2386<T extends unknown[], V> = [...T, V];

type TuplifyUnion2386<T, L = LastOf2386<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2386<TuplifyUnion2386<Exclude<T, L>>, L>;

type DeepPartial2386<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2386<T[P]> }
  : T;

type Paths2386<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2386<K, Paths2386<T[K], Prev2386[D]>> : never }[keyof T]
  : never;

type Prev2386 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2386<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2386 {
  level1: {
    level2: {
      level3: {
        value: string;
        count: number;
        enabled: boolean;
        items: Array<{ id: number; name: string }>;
      };
    };
  };
}

type ConfigPaths2386 = Paths2386<NestedConfig2386>;

interface HeavyProps2386 {
  config: DeepPartial2386<NestedConfig2386>;
  path?: ConfigPaths2386;
}

const HeavyComponent2386 = memo(function HeavyComponent2386({ config }: HeavyProps2386) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2386) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2386 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2386: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2386.displayName = 'HeavyComponent2386';
export default HeavyComponent2386;
