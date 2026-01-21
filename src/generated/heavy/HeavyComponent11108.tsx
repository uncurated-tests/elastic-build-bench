'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11108<T> = T extends (infer U)[]
  ? DeepReadonlyArray11108<U>
  : T extends object
  ? DeepReadonlyObject11108<T>
  : T;

interface DeepReadonlyArray11108<T> extends ReadonlyArray<DeepReadonly11108<T>> {}

type DeepReadonlyObject11108<T> = {
  readonly [P in keyof T]: DeepReadonly11108<T[P]>;
};

type UnionToIntersection11108<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11108<T> = UnionToIntersection11108<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11108<T extends unknown[], V> = [...T, V];

type TuplifyUnion11108<T, L = LastOf11108<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11108<TuplifyUnion11108<Exclude<T, L>>, L>;

type DeepPartial11108<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11108<T[P]> }
  : T;

type Paths11108<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11108<K, Paths11108<T[K], Prev11108[D]>> : never }[keyof T]
  : never;

type Prev11108 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11108<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11108 {
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

type ConfigPaths11108 = Paths11108<NestedConfig11108>;

interface HeavyProps11108 {
  config: DeepPartial11108<NestedConfig11108>;
  path?: ConfigPaths11108;
}

const HeavyComponent11108 = memo(function HeavyComponent11108({ config }: HeavyProps11108) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11108) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11108 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11108: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11108.displayName = 'HeavyComponent11108';
export default HeavyComponent11108;
