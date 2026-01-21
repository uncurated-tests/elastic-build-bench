'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11349<T> = T extends (infer U)[]
  ? DeepReadonlyArray11349<U>
  : T extends object
  ? DeepReadonlyObject11349<T>
  : T;

interface DeepReadonlyArray11349<T> extends ReadonlyArray<DeepReadonly11349<T>> {}

type DeepReadonlyObject11349<T> = {
  readonly [P in keyof T]: DeepReadonly11349<T[P]>;
};

type UnionToIntersection11349<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11349<T> = UnionToIntersection11349<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11349<T extends unknown[], V> = [...T, V];

type TuplifyUnion11349<T, L = LastOf11349<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11349<TuplifyUnion11349<Exclude<T, L>>, L>;

type DeepPartial11349<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11349<T[P]> }
  : T;

type Paths11349<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11349<K, Paths11349<T[K], Prev11349[D]>> : never }[keyof T]
  : never;

type Prev11349 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11349<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11349 {
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

type ConfigPaths11349 = Paths11349<NestedConfig11349>;

interface HeavyProps11349 {
  config: DeepPartial11349<NestedConfig11349>;
  path?: ConfigPaths11349;
}

const HeavyComponent11349 = memo(function HeavyComponent11349({ config }: HeavyProps11349) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11349) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11349 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11349: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11349.displayName = 'HeavyComponent11349';
export default HeavyComponent11349;
