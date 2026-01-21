'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11711<T> = T extends (infer U)[]
  ? DeepReadonlyArray11711<U>
  : T extends object
  ? DeepReadonlyObject11711<T>
  : T;

interface DeepReadonlyArray11711<T> extends ReadonlyArray<DeepReadonly11711<T>> {}

type DeepReadonlyObject11711<T> = {
  readonly [P in keyof T]: DeepReadonly11711<T[P]>;
};

type UnionToIntersection11711<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11711<T> = UnionToIntersection11711<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11711<T extends unknown[], V> = [...T, V];

type TuplifyUnion11711<T, L = LastOf11711<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11711<TuplifyUnion11711<Exclude<T, L>>, L>;

type DeepPartial11711<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11711<T[P]> }
  : T;

type Paths11711<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11711<K, Paths11711<T[K], Prev11711[D]>> : never }[keyof T]
  : never;

type Prev11711 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11711<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11711 {
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

type ConfigPaths11711 = Paths11711<NestedConfig11711>;

interface HeavyProps11711 {
  config: DeepPartial11711<NestedConfig11711>;
  path?: ConfigPaths11711;
}

const HeavyComponent11711 = memo(function HeavyComponent11711({ config }: HeavyProps11711) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11711) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11711 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11711: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11711.displayName = 'HeavyComponent11711';
export default HeavyComponent11711;
