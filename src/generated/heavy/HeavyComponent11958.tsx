'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11958<T> = T extends (infer U)[]
  ? DeepReadonlyArray11958<U>
  : T extends object
  ? DeepReadonlyObject11958<T>
  : T;

interface DeepReadonlyArray11958<T> extends ReadonlyArray<DeepReadonly11958<T>> {}

type DeepReadonlyObject11958<T> = {
  readonly [P in keyof T]: DeepReadonly11958<T[P]>;
};

type UnionToIntersection11958<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11958<T> = UnionToIntersection11958<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11958<T extends unknown[], V> = [...T, V];

type TuplifyUnion11958<T, L = LastOf11958<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11958<TuplifyUnion11958<Exclude<T, L>>, L>;

type DeepPartial11958<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11958<T[P]> }
  : T;

type Paths11958<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11958<K, Paths11958<T[K], Prev11958[D]>> : never }[keyof T]
  : never;

type Prev11958 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11958<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11958 {
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

type ConfigPaths11958 = Paths11958<NestedConfig11958>;

interface HeavyProps11958 {
  config: DeepPartial11958<NestedConfig11958>;
  path?: ConfigPaths11958;
}

const HeavyComponent11958 = memo(function HeavyComponent11958({ config }: HeavyProps11958) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11958) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11958 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11958: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11958.displayName = 'HeavyComponent11958';
export default HeavyComponent11958;
