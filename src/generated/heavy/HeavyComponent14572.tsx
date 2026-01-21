'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14572<T> = T extends (infer U)[]
  ? DeepReadonlyArray14572<U>
  : T extends object
  ? DeepReadonlyObject14572<T>
  : T;

interface DeepReadonlyArray14572<T> extends ReadonlyArray<DeepReadonly14572<T>> {}

type DeepReadonlyObject14572<T> = {
  readonly [P in keyof T]: DeepReadonly14572<T[P]>;
};

type UnionToIntersection14572<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14572<T> = UnionToIntersection14572<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14572<T extends unknown[], V> = [...T, V];

type TuplifyUnion14572<T, L = LastOf14572<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14572<TuplifyUnion14572<Exclude<T, L>>, L>;

type DeepPartial14572<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14572<T[P]> }
  : T;

type Paths14572<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14572<K, Paths14572<T[K], Prev14572[D]>> : never }[keyof T]
  : never;

type Prev14572 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14572<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14572 {
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

type ConfigPaths14572 = Paths14572<NestedConfig14572>;

interface HeavyProps14572 {
  config: DeepPartial14572<NestedConfig14572>;
  path?: ConfigPaths14572;
}

const HeavyComponent14572 = memo(function HeavyComponent14572({ config }: HeavyProps14572) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14572) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14572 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14572: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14572.displayName = 'HeavyComponent14572';
export default HeavyComponent14572;
