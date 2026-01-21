'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11275<T> = T extends (infer U)[]
  ? DeepReadonlyArray11275<U>
  : T extends object
  ? DeepReadonlyObject11275<T>
  : T;

interface DeepReadonlyArray11275<T> extends ReadonlyArray<DeepReadonly11275<T>> {}

type DeepReadonlyObject11275<T> = {
  readonly [P in keyof T]: DeepReadonly11275<T[P]>;
};

type UnionToIntersection11275<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11275<T> = UnionToIntersection11275<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11275<T extends unknown[], V> = [...T, V];

type TuplifyUnion11275<T, L = LastOf11275<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11275<TuplifyUnion11275<Exclude<T, L>>, L>;

type DeepPartial11275<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11275<T[P]> }
  : T;

type Paths11275<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11275<K, Paths11275<T[K], Prev11275[D]>> : never }[keyof T]
  : never;

type Prev11275 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11275<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11275 {
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

type ConfigPaths11275 = Paths11275<NestedConfig11275>;

interface HeavyProps11275 {
  config: DeepPartial11275<NestedConfig11275>;
  path?: ConfigPaths11275;
}

const HeavyComponent11275 = memo(function HeavyComponent11275({ config }: HeavyProps11275) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11275) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11275 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11275: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11275.displayName = 'HeavyComponent11275';
export default HeavyComponent11275;
