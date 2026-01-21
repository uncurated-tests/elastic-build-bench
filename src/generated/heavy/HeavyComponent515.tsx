'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly515<T> = T extends (infer U)[]
  ? DeepReadonlyArray515<U>
  : T extends object
  ? DeepReadonlyObject515<T>
  : T;

interface DeepReadonlyArray515<T> extends ReadonlyArray<DeepReadonly515<T>> {}

type DeepReadonlyObject515<T> = {
  readonly [P in keyof T]: DeepReadonly515<T[P]>;
};

type UnionToIntersection515<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf515<T> = UnionToIntersection515<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push515<T extends unknown[], V> = [...T, V];

type TuplifyUnion515<T, L = LastOf515<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push515<TuplifyUnion515<Exclude<T, L>>, L>;

type DeepPartial515<T> = T extends object
  ? { [P in keyof T]?: DeepPartial515<T[P]> }
  : T;

type Paths515<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join515<K, Paths515<T[K], Prev515[D]>> : never }[keyof T]
  : never;

type Prev515 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join515<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig515 {
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

type ConfigPaths515 = Paths515<NestedConfig515>;

interface HeavyProps515 {
  config: DeepPartial515<NestedConfig515>;
  path?: ConfigPaths515;
}

const HeavyComponent515 = memo(function HeavyComponent515({ config }: HeavyProps515) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 515) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-515 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H515: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent515.displayName = 'HeavyComponent515';
export default HeavyComponent515;
