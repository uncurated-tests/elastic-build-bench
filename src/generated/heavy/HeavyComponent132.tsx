'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly132<T> = T extends (infer U)[]
  ? DeepReadonlyArray132<U>
  : T extends object
  ? DeepReadonlyObject132<T>
  : T;

interface DeepReadonlyArray132<T> extends ReadonlyArray<DeepReadonly132<T>> {}

type DeepReadonlyObject132<T> = {
  readonly [P in keyof T]: DeepReadonly132<T[P]>;
};

type UnionToIntersection132<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf132<T> = UnionToIntersection132<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push132<T extends unknown[], V> = [...T, V];

type TuplifyUnion132<T, L = LastOf132<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push132<TuplifyUnion132<Exclude<T, L>>, L>;

type DeepPartial132<T> = T extends object
  ? { [P in keyof T]?: DeepPartial132<T[P]> }
  : T;

type Paths132<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join132<K, Paths132<T[K], Prev132[D]>> : never }[keyof T]
  : never;

type Prev132 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join132<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig132 {
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

type ConfigPaths132 = Paths132<NestedConfig132>;

interface HeavyProps132 {
  config: DeepPartial132<NestedConfig132>;
  path?: ConfigPaths132;
}

const HeavyComponent132 = memo(function HeavyComponent132({ config }: HeavyProps132) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 132) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-132 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H132: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent132.displayName = 'HeavyComponent132';
export default HeavyComponent132;
