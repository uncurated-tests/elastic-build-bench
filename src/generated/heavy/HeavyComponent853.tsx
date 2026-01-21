'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly853<T> = T extends (infer U)[]
  ? DeepReadonlyArray853<U>
  : T extends object
  ? DeepReadonlyObject853<T>
  : T;

interface DeepReadonlyArray853<T> extends ReadonlyArray<DeepReadonly853<T>> {}

type DeepReadonlyObject853<T> = {
  readonly [P in keyof T]: DeepReadonly853<T[P]>;
};

type UnionToIntersection853<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf853<T> = UnionToIntersection853<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push853<T extends unknown[], V> = [...T, V];

type TuplifyUnion853<T, L = LastOf853<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push853<TuplifyUnion853<Exclude<T, L>>, L>;

type DeepPartial853<T> = T extends object
  ? { [P in keyof T]?: DeepPartial853<T[P]> }
  : T;

type Paths853<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join853<K, Paths853<T[K], Prev853[D]>> : never }[keyof T]
  : never;

type Prev853 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join853<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig853 {
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

type ConfigPaths853 = Paths853<NestedConfig853>;

interface HeavyProps853 {
  config: DeepPartial853<NestedConfig853>;
  path?: ConfigPaths853;
}

const HeavyComponent853 = memo(function HeavyComponent853({ config }: HeavyProps853) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 853) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-853 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H853: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent853.displayName = 'HeavyComponent853';
export default HeavyComponent853;
