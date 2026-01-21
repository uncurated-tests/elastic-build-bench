'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3469<T> = T extends (infer U)[]
  ? DeepReadonlyArray3469<U>
  : T extends object
  ? DeepReadonlyObject3469<T>
  : T;

interface DeepReadonlyArray3469<T> extends ReadonlyArray<DeepReadonly3469<T>> {}

type DeepReadonlyObject3469<T> = {
  readonly [P in keyof T]: DeepReadonly3469<T[P]>;
};

type UnionToIntersection3469<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3469<T> = UnionToIntersection3469<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3469<T extends unknown[], V> = [...T, V];

type TuplifyUnion3469<T, L = LastOf3469<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3469<TuplifyUnion3469<Exclude<T, L>>, L>;

type DeepPartial3469<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3469<T[P]> }
  : T;

type Paths3469<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3469<K, Paths3469<T[K], Prev3469[D]>> : never }[keyof T]
  : never;

type Prev3469 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3469<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3469 {
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

type ConfigPaths3469 = Paths3469<NestedConfig3469>;

interface HeavyProps3469 {
  config: DeepPartial3469<NestedConfig3469>;
  path?: ConfigPaths3469;
}

const HeavyComponent3469 = memo(function HeavyComponent3469({ config }: HeavyProps3469) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3469) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3469 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3469: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3469.displayName = 'HeavyComponent3469';
export default HeavyComponent3469;
