'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2405<T> = T extends (infer U)[]
  ? DeepReadonlyArray2405<U>
  : T extends object
  ? DeepReadonlyObject2405<T>
  : T;

interface DeepReadonlyArray2405<T> extends ReadonlyArray<DeepReadonly2405<T>> {}

type DeepReadonlyObject2405<T> = {
  readonly [P in keyof T]: DeepReadonly2405<T[P]>;
};

type UnionToIntersection2405<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2405<T> = UnionToIntersection2405<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2405<T extends unknown[], V> = [...T, V];

type TuplifyUnion2405<T, L = LastOf2405<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2405<TuplifyUnion2405<Exclude<T, L>>, L>;

type DeepPartial2405<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2405<T[P]> }
  : T;

type Paths2405<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2405<K, Paths2405<T[K], Prev2405[D]>> : never }[keyof T]
  : never;

type Prev2405 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2405<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2405 {
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

type ConfigPaths2405 = Paths2405<NestedConfig2405>;

interface HeavyProps2405 {
  config: DeepPartial2405<NestedConfig2405>;
  path?: ConfigPaths2405;
}

const HeavyComponent2405 = memo(function HeavyComponent2405({ config }: HeavyProps2405) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2405) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2405 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2405: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2405.displayName = 'HeavyComponent2405';
export default HeavyComponent2405;
