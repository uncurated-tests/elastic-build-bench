'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11009<T> = T extends (infer U)[]
  ? DeepReadonlyArray11009<U>
  : T extends object
  ? DeepReadonlyObject11009<T>
  : T;

interface DeepReadonlyArray11009<T> extends ReadonlyArray<DeepReadonly11009<T>> {}

type DeepReadonlyObject11009<T> = {
  readonly [P in keyof T]: DeepReadonly11009<T[P]>;
};

type UnionToIntersection11009<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11009<T> = UnionToIntersection11009<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11009<T extends unknown[], V> = [...T, V];

type TuplifyUnion11009<T, L = LastOf11009<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11009<TuplifyUnion11009<Exclude<T, L>>, L>;

type DeepPartial11009<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11009<T[P]> }
  : T;

type Paths11009<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11009<K, Paths11009<T[K], Prev11009[D]>> : never }[keyof T]
  : never;

type Prev11009 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11009<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11009 {
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

type ConfigPaths11009 = Paths11009<NestedConfig11009>;

interface HeavyProps11009 {
  config: DeepPartial11009<NestedConfig11009>;
  path?: ConfigPaths11009;
}

const HeavyComponent11009 = memo(function HeavyComponent11009({ config }: HeavyProps11009) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11009) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11009 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11009: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11009.displayName = 'HeavyComponent11009';
export default HeavyComponent11009;
