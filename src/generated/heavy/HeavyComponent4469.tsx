'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4469<T> = T extends (infer U)[]
  ? DeepReadonlyArray4469<U>
  : T extends object
  ? DeepReadonlyObject4469<T>
  : T;

interface DeepReadonlyArray4469<T> extends ReadonlyArray<DeepReadonly4469<T>> {}

type DeepReadonlyObject4469<T> = {
  readonly [P in keyof T]: DeepReadonly4469<T[P]>;
};

type UnionToIntersection4469<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4469<T> = UnionToIntersection4469<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4469<T extends unknown[], V> = [...T, V];

type TuplifyUnion4469<T, L = LastOf4469<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4469<TuplifyUnion4469<Exclude<T, L>>, L>;

type DeepPartial4469<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4469<T[P]> }
  : T;

type Paths4469<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4469<K, Paths4469<T[K], Prev4469[D]>> : never }[keyof T]
  : never;

type Prev4469 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4469<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4469 {
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

type ConfigPaths4469 = Paths4469<NestedConfig4469>;

interface HeavyProps4469 {
  config: DeepPartial4469<NestedConfig4469>;
  path?: ConfigPaths4469;
}

const HeavyComponent4469 = memo(function HeavyComponent4469({ config }: HeavyProps4469) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4469) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4469 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4469: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4469.displayName = 'HeavyComponent4469';
export default HeavyComponent4469;
