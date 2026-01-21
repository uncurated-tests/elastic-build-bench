'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11857<T> = T extends (infer U)[]
  ? DeepReadonlyArray11857<U>
  : T extends object
  ? DeepReadonlyObject11857<T>
  : T;

interface DeepReadonlyArray11857<T> extends ReadonlyArray<DeepReadonly11857<T>> {}

type DeepReadonlyObject11857<T> = {
  readonly [P in keyof T]: DeepReadonly11857<T[P]>;
};

type UnionToIntersection11857<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11857<T> = UnionToIntersection11857<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11857<T extends unknown[], V> = [...T, V];

type TuplifyUnion11857<T, L = LastOf11857<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11857<TuplifyUnion11857<Exclude<T, L>>, L>;

type DeepPartial11857<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11857<T[P]> }
  : T;

type Paths11857<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11857<K, Paths11857<T[K], Prev11857[D]>> : never }[keyof T]
  : never;

type Prev11857 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11857<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11857 {
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

type ConfigPaths11857 = Paths11857<NestedConfig11857>;

interface HeavyProps11857 {
  config: DeepPartial11857<NestedConfig11857>;
  path?: ConfigPaths11857;
}

const HeavyComponent11857 = memo(function HeavyComponent11857({ config }: HeavyProps11857) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11857) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11857 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11857: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11857.displayName = 'HeavyComponent11857';
export default HeavyComponent11857;
