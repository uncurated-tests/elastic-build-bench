'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11374<T> = T extends (infer U)[]
  ? DeepReadonlyArray11374<U>
  : T extends object
  ? DeepReadonlyObject11374<T>
  : T;

interface DeepReadonlyArray11374<T> extends ReadonlyArray<DeepReadonly11374<T>> {}

type DeepReadonlyObject11374<T> = {
  readonly [P in keyof T]: DeepReadonly11374<T[P]>;
};

type UnionToIntersection11374<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11374<T> = UnionToIntersection11374<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11374<T extends unknown[], V> = [...T, V];

type TuplifyUnion11374<T, L = LastOf11374<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11374<TuplifyUnion11374<Exclude<T, L>>, L>;

type DeepPartial11374<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11374<T[P]> }
  : T;

type Paths11374<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11374<K, Paths11374<T[K], Prev11374[D]>> : never }[keyof T]
  : never;

type Prev11374 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11374<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11374 {
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

type ConfigPaths11374 = Paths11374<NestedConfig11374>;

interface HeavyProps11374 {
  config: DeepPartial11374<NestedConfig11374>;
  path?: ConfigPaths11374;
}

const HeavyComponent11374 = memo(function HeavyComponent11374({ config }: HeavyProps11374) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11374) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11374 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11374: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11374.displayName = 'HeavyComponent11374';
export default HeavyComponent11374;
