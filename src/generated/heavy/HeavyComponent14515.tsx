'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14515<T> = T extends (infer U)[]
  ? DeepReadonlyArray14515<U>
  : T extends object
  ? DeepReadonlyObject14515<T>
  : T;

interface DeepReadonlyArray14515<T> extends ReadonlyArray<DeepReadonly14515<T>> {}

type DeepReadonlyObject14515<T> = {
  readonly [P in keyof T]: DeepReadonly14515<T[P]>;
};

type UnionToIntersection14515<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14515<T> = UnionToIntersection14515<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14515<T extends unknown[], V> = [...T, V];

type TuplifyUnion14515<T, L = LastOf14515<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14515<TuplifyUnion14515<Exclude<T, L>>, L>;

type DeepPartial14515<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14515<T[P]> }
  : T;

type Paths14515<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14515<K, Paths14515<T[K], Prev14515[D]>> : never }[keyof T]
  : never;

type Prev14515 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14515<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14515 {
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

type ConfigPaths14515 = Paths14515<NestedConfig14515>;

interface HeavyProps14515 {
  config: DeepPartial14515<NestedConfig14515>;
  path?: ConfigPaths14515;
}

const HeavyComponent14515 = memo(function HeavyComponent14515({ config }: HeavyProps14515) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14515) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14515 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14515: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14515.displayName = 'HeavyComponent14515';
export default HeavyComponent14515;
