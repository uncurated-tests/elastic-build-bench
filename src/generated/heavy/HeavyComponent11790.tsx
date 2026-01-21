'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11790<T> = T extends (infer U)[]
  ? DeepReadonlyArray11790<U>
  : T extends object
  ? DeepReadonlyObject11790<T>
  : T;

interface DeepReadonlyArray11790<T> extends ReadonlyArray<DeepReadonly11790<T>> {}

type DeepReadonlyObject11790<T> = {
  readonly [P in keyof T]: DeepReadonly11790<T[P]>;
};

type UnionToIntersection11790<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11790<T> = UnionToIntersection11790<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11790<T extends unknown[], V> = [...T, V];

type TuplifyUnion11790<T, L = LastOf11790<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11790<TuplifyUnion11790<Exclude<T, L>>, L>;

type DeepPartial11790<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11790<T[P]> }
  : T;

type Paths11790<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11790<K, Paths11790<T[K], Prev11790[D]>> : never }[keyof T]
  : never;

type Prev11790 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11790<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11790 {
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

type ConfigPaths11790 = Paths11790<NestedConfig11790>;

interface HeavyProps11790 {
  config: DeepPartial11790<NestedConfig11790>;
  path?: ConfigPaths11790;
}

const HeavyComponent11790 = memo(function HeavyComponent11790({ config }: HeavyProps11790) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11790) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11790 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11790: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11790.displayName = 'HeavyComponent11790';
export default HeavyComponent11790;
