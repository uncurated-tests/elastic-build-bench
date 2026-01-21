'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3457<T> = T extends (infer U)[]
  ? DeepReadonlyArray3457<U>
  : T extends object
  ? DeepReadonlyObject3457<T>
  : T;

interface DeepReadonlyArray3457<T> extends ReadonlyArray<DeepReadonly3457<T>> {}

type DeepReadonlyObject3457<T> = {
  readonly [P in keyof T]: DeepReadonly3457<T[P]>;
};

type UnionToIntersection3457<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3457<T> = UnionToIntersection3457<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3457<T extends unknown[], V> = [...T, V];

type TuplifyUnion3457<T, L = LastOf3457<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3457<TuplifyUnion3457<Exclude<T, L>>, L>;

type DeepPartial3457<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3457<T[P]> }
  : T;

type Paths3457<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3457<K, Paths3457<T[K], Prev3457[D]>> : never }[keyof T]
  : never;

type Prev3457 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3457<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3457 {
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

type ConfigPaths3457 = Paths3457<NestedConfig3457>;

interface HeavyProps3457 {
  config: DeepPartial3457<NestedConfig3457>;
  path?: ConfigPaths3457;
}

const HeavyComponent3457 = memo(function HeavyComponent3457({ config }: HeavyProps3457) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3457) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3457 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3457: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3457.displayName = 'HeavyComponent3457';
export default HeavyComponent3457;
