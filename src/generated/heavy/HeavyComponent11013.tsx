'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11013<T> = T extends (infer U)[]
  ? DeepReadonlyArray11013<U>
  : T extends object
  ? DeepReadonlyObject11013<T>
  : T;

interface DeepReadonlyArray11013<T> extends ReadonlyArray<DeepReadonly11013<T>> {}

type DeepReadonlyObject11013<T> = {
  readonly [P in keyof T]: DeepReadonly11013<T[P]>;
};

type UnionToIntersection11013<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11013<T> = UnionToIntersection11013<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11013<T extends unknown[], V> = [...T, V];

type TuplifyUnion11013<T, L = LastOf11013<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11013<TuplifyUnion11013<Exclude<T, L>>, L>;

type DeepPartial11013<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11013<T[P]> }
  : T;

type Paths11013<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11013<K, Paths11013<T[K], Prev11013[D]>> : never }[keyof T]
  : never;

type Prev11013 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11013<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11013 {
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

type ConfigPaths11013 = Paths11013<NestedConfig11013>;

interface HeavyProps11013 {
  config: DeepPartial11013<NestedConfig11013>;
  path?: ConfigPaths11013;
}

const HeavyComponent11013 = memo(function HeavyComponent11013({ config }: HeavyProps11013) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11013) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11013 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11013: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11013.displayName = 'HeavyComponent11013';
export default HeavyComponent11013;
