'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11127<T> = T extends (infer U)[]
  ? DeepReadonlyArray11127<U>
  : T extends object
  ? DeepReadonlyObject11127<T>
  : T;

interface DeepReadonlyArray11127<T> extends ReadonlyArray<DeepReadonly11127<T>> {}

type DeepReadonlyObject11127<T> = {
  readonly [P in keyof T]: DeepReadonly11127<T[P]>;
};

type UnionToIntersection11127<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11127<T> = UnionToIntersection11127<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11127<T extends unknown[], V> = [...T, V];

type TuplifyUnion11127<T, L = LastOf11127<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11127<TuplifyUnion11127<Exclude<T, L>>, L>;

type DeepPartial11127<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11127<T[P]> }
  : T;

type Paths11127<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11127<K, Paths11127<T[K], Prev11127[D]>> : never }[keyof T]
  : never;

type Prev11127 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11127<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11127 {
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

type ConfigPaths11127 = Paths11127<NestedConfig11127>;

interface HeavyProps11127 {
  config: DeepPartial11127<NestedConfig11127>;
  path?: ConfigPaths11127;
}

const HeavyComponent11127 = memo(function HeavyComponent11127({ config }: HeavyProps11127) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11127) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11127 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11127: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11127.displayName = 'HeavyComponent11127';
export default HeavyComponent11127;
