'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11027<T> = T extends (infer U)[]
  ? DeepReadonlyArray11027<U>
  : T extends object
  ? DeepReadonlyObject11027<T>
  : T;

interface DeepReadonlyArray11027<T> extends ReadonlyArray<DeepReadonly11027<T>> {}

type DeepReadonlyObject11027<T> = {
  readonly [P in keyof T]: DeepReadonly11027<T[P]>;
};

type UnionToIntersection11027<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11027<T> = UnionToIntersection11027<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11027<T extends unknown[], V> = [...T, V];

type TuplifyUnion11027<T, L = LastOf11027<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11027<TuplifyUnion11027<Exclude<T, L>>, L>;

type DeepPartial11027<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11027<T[P]> }
  : T;

type Paths11027<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11027<K, Paths11027<T[K], Prev11027[D]>> : never }[keyof T]
  : never;

type Prev11027 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11027<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11027 {
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

type ConfigPaths11027 = Paths11027<NestedConfig11027>;

interface HeavyProps11027 {
  config: DeepPartial11027<NestedConfig11027>;
  path?: ConfigPaths11027;
}

const HeavyComponent11027 = memo(function HeavyComponent11027({ config }: HeavyProps11027) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11027) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11027 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11027: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11027.displayName = 'HeavyComponent11027';
export default HeavyComponent11027;
