'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2506<T> = T extends (infer U)[]
  ? DeepReadonlyArray2506<U>
  : T extends object
  ? DeepReadonlyObject2506<T>
  : T;

interface DeepReadonlyArray2506<T> extends ReadonlyArray<DeepReadonly2506<T>> {}

type DeepReadonlyObject2506<T> = {
  readonly [P in keyof T]: DeepReadonly2506<T[P]>;
};

type UnionToIntersection2506<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2506<T> = UnionToIntersection2506<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2506<T extends unknown[], V> = [...T, V];

type TuplifyUnion2506<T, L = LastOf2506<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2506<TuplifyUnion2506<Exclude<T, L>>, L>;

type DeepPartial2506<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2506<T[P]> }
  : T;

type Paths2506<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2506<K, Paths2506<T[K], Prev2506[D]>> : never }[keyof T]
  : never;

type Prev2506 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2506<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2506 {
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

type ConfigPaths2506 = Paths2506<NestedConfig2506>;

interface HeavyProps2506 {
  config: DeepPartial2506<NestedConfig2506>;
  path?: ConfigPaths2506;
}

const HeavyComponent2506 = memo(function HeavyComponent2506({ config }: HeavyProps2506) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2506) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2506 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2506: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2506.displayName = 'HeavyComponent2506';
export default HeavyComponent2506;
