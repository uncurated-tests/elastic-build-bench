'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2976<T> = T extends (infer U)[]
  ? DeepReadonlyArray2976<U>
  : T extends object
  ? DeepReadonlyObject2976<T>
  : T;

interface DeepReadonlyArray2976<T> extends ReadonlyArray<DeepReadonly2976<T>> {}

type DeepReadonlyObject2976<T> = {
  readonly [P in keyof T]: DeepReadonly2976<T[P]>;
};

type UnionToIntersection2976<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2976<T> = UnionToIntersection2976<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2976<T extends unknown[], V> = [...T, V];

type TuplifyUnion2976<T, L = LastOf2976<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2976<TuplifyUnion2976<Exclude<T, L>>, L>;

type DeepPartial2976<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2976<T[P]> }
  : T;

type Paths2976<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2976<K, Paths2976<T[K], Prev2976[D]>> : never }[keyof T]
  : never;

type Prev2976 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2976<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2976 {
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

type ConfigPaths2976 = Paths2976<NestedConfig2976>;

interface HeavyProps2976 {
  config: DeepPartial2976<NestedConfig2976>;
  path?: ConfigPaths2976;
}

const HeavyComponent2976 = memo(function HeavyComponent2976({ config }: HeavyProps2976) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2976) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2976 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2976: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2976.displayName = 'HeavyComponent2976';
export default HeavyComponent2976;
