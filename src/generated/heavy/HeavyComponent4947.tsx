'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4947<T> = T extends (infer U)[]
  ? DeepReadonlyArray4947<U>
  : T extends object
  ? DeepReadonlyObject4947<T>
  : T;

interface DeepReadonlyArray4947<T> extends ReadonlyArray<DeepReadonly4947<T>> {}

type DeepReadonlyObject4947<T> = {
  readonly [P in keyof T]: DeepReadonly4947<T[P]>;
};

type UnionToIntersection4947<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4947<T> = UnionToIntersection4947<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4947<T extends unknown[], V> = [...T, V];

type TuplifyUnion4947<T, L = LastOf4947<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4947<TuplifyUnion4947<Exclude<T, L>>, L>;

type DeepPartial4947<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4947<T[P]> }
  : T;

type Paths4947<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4947<K, Paths4947<T[K], Prev4947[D]>> : never }[keyof T]
  : never;

type Prev4947 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4947<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4947 {
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

type ConfigPaths4947 = Paths4947<NestedConfig4947>;

interface HeavyProps4947 {
  config: DeepPartial4947<NestedConfig4947>;
  path?: ConfigPaths4947;
}

const HeavyComponent4947 = memo(function HeavyComponent4947({ config }: HeavyProps4947) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4947) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4947 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4947: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4947.displayName = 'HeavyComponent4947';
export default HeavyComponent4947;
