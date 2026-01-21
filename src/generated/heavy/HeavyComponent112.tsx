'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly112<T> = T extends (infer U)[]
  ? DeepReadonlyArray112<U>
  : T extends object
  ? DeepReadonlyObject112<T>
  : T;

interface DeepReadonlyArray112<T> extends ReadonlyArray<DeepReadonly112<T>> {}

type DeepReadonlyObject112<T> = {
  readonly [P in keyof T]: DeepReadonly112<T[P]>;
};

type UnionToIntersection112<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf112<T> = UnionToIntersection112<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push112<T extends unknown[], V> = [...T, V];

type TuplifyUnion112<T, L = LastOf112<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push112<TuplifyUnion112<Exclude<T, L>>, L>;

type DeepPartial112<T> = T extends object
  ? { [P in keyof T]?: DeepPartial112<T[P]> }
  : T;

type Paths112<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join112<K, Paths112<T[K], Prev112[D]>> : never }[keyof T]
  : never;

type Prev112 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join112<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig112 {
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

type ConfigPaths112 = Paths112<NestedConfig112>;

interface HeavyProps112 {
  config: DeepPartial112<NestedConfig112>;
  path?: ConfigPaths112;
}

const HeavyComponent112 = memo(function HeavyComponent112({ config }: HeavyProps112) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 112) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-112 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H112: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent112.displayName = 'HeavyComponent112';
export default HeavyComponent112;
