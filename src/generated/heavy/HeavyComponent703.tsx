'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly703<T> = T extends (infer U)[]
  ? DeepReadonlyArray703<U>
  : T extends object
  ? DeepReadonlyObject703<T>
  : T;

interface DeepReadonlyArray703<T> extends ReadonlyArray<DeepReadonly703<T>> {}

type DeepReadonlyObject703<T> = {
  readonly [P in keyof T]: DeepReadonly703<T[P]>;
};

type UnionToIntersection703<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf703<T> = UnionToIntersection703<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push703<T extends unknown[], V> = [...T, V];

type TuplifyUnion703<T, L = LastOf703<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push703<TuplifyUnion703<Exclude<T, L>>, L>;

type DeepPartial703<T> = T extends object
  ? { [P in keyof T]?: DeepPartial703<T[P]> }
  : T;

type Paths703<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join703<K, Paths703<T[K], Prev703[D]>> : never }[keyof T]
  : never;

type Prev703 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join703<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig703 {
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

type ConfigPaths703 = Paths703<NestedConfig703>;

interface HeavyProps703 {
  config: DeepPartial703<NestedConfig703>;
  path?: ConfigPaths703;
}

const HeavyComponent703 = memo(function HeavyComponent703({ config }: HeavyProps703) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 703) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-703 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H703: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent703.displayName = 'HeavyComponent703';
export default HeavyComponent703;
