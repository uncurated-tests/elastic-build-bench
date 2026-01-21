'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly460<T> = T extends (infer U)[]
  ? DeepReadonlyArray460<U>
  : T extends object
  ? DeepReadonlyObject460<T>
  : T;

interface DeepReadonlyArray460<T> extends ReadonlyArray<DeepReadonly460<T>> {}

type DeepReadonlyObject460<T> = {
  readonly [P in keyof T]: DeepReadonly460<T[P]>;
};

type UnionToIntersection460<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf460<T> = UnionToIntersection460<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push460<T extends unknown[], V> = [...T, V];

type TuplifyUnion460<T, L = LastOf460<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push460<TuplifyUnion460<Exclude<T, L>>, L>;

type DeepPartial460<T> = T extends object
  ? { [P in keyof T]?: DeepPartial460<T[P]> }
  : T;

type Paths460<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join460<K, Paths460<T[K], Prev460[D]>> : never }[keyof T]
  : never;

type Prev460 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join460<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig460 {
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

type ConfigPaths460 = Paths460<NestedConfig460>;

interface HeavyProps460 {
  config: DeepPartial460<NestedConfig460>;
  path?: ConfigPaths460;
}

const HeavyComponent460 = memo(function HeavyComponent460({ config }: HeavyProps460) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 460) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-460 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H460: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent460.displayName = 'HeavyComponent460';
export default HeavyComponent460;
