'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2228<T> = T extends (infer U)[]
  ? DeepReadonlyArray2228<U>
  : T extends object
  ? DeepReadonlyObject2228<T>
  : T;

interface DeepReadonlyArray2228<T> extends ReadonlyArray<DeepReadonly2228<T>> {}

type DeepReadonlyObject2228<T> = {
  readonly [P in keyof T]: DeepReadonly2228<T[P]>;
};

type UnionToIntersection2228<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2228<T> = UnionToIntersection2228<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2228<T extends unknown[], V> = [...T, V];

type TuplifyUnion2228<T, L = LastOf2228<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2228<TuplifyUnion2228<Exclude<T, L>>, L>;

type DeepPartial2228<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2228<T[P]> }
  : T;

type Paths2228<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2228<K, Paths2228<T[K], Prev2228[D]>> : never }[keyof T]
  : never;

type Prev2228 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2228<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2228 {
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

type ConfigPaths2228 = Paths2228<NestedConfig2228>;

interface HeavyProps2228 {
  config: DeepPartial2228<NestedConfig2228>;
  path?: ConfigPaths2228;
}

const HeavyComponent2228 = memo(function HeavyComponent2228({ config }: HeavyProps2228) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2228) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2228 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2228: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2228.displayName = 'HeavyComponent2228';
export default HeavyComponent2228;
