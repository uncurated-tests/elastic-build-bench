'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6469<T> = T extends (infer U)[]
  ? DeepReadonlyArray6469<U>
  : T extends object
  ? DeepReadonlyObject6469<T>
  : T;

interface DeepReadonlyArray6469<T> extends ReadonlyArray<DeepReadonly6469<T>> {}

type DeepReadonlyObject6469<T> = {
  readonly [P in keyof T]: DeepReadonly6469<T[P]>;
};

type UnionToIntersection6469<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6469<T> = UnionToIntersection6469<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6469<T extends unknown[], V> = [...T, V];

type TuplifyUnion6469<T, L = LastOf6469<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6469<TuplifyUnion6469<Exclude<T, L>>, L>;

type DeepPartial6469<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6469<T[P]> }
  : T;

type Paths6469<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6469<K, Paths6469<T[K], Prev6469[D]>> : never }[keyof T]
  : never;

type Prev6469 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6469<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6469 {
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

type ConfigPaths6469 = Paths6469<NestedConfig6469>;

interface HeavyProps6469 {
  config: DeepPartial6469<NestedConfig6469>;
  path?: ConfigPaths6469;
}

const HeavyComponent6469 = memo(function HeavyComponent6469({ config }: HeavyProps6469) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6469) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6469 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6469: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6469.displayName = 'HeavyComponent6469';
export default HeavyComponent6469;
