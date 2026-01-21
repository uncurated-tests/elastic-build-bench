'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11208<T> = T extends (infer U)[]
  ? DeepReadonlyArray11208<U>
  : T extends object
  ? DeepReadonlyObject11208<T>
  : T;

interface DeepReadonlyArray11208<T> extends ReadonlyArray<DeepReadonly11208<T>> {}

type DeepReadonlyObject11208<T> = {
  readonly [P in keyof T]: DeepReadonly11208<T[P]>;
};

type UnionToIntersection11208<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11208<T> = UnionToIntersection11208<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11208<T extends unknown[], V> = [...T, V];

type TuplifyUnion11208<T, L = LastOf11208<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11208<TuplifyUnion11208<Exclude<T, L>>, L>;

type DeepPartial11208<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11208<T[P]> }
  : T;

type Paths11208<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11208<K, Paths11208<T[K], Prev11208[D]>> : never }[keyof T]
  : never;

type Prev11208 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11208<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11208 {
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

type ConfigPaths11208 = Paths11208<NestedConfig11208>;

interface HeavyProps11208 {
  config: DeepPartial11208<NestedConfig11208>;
  path?: ConfigPaths11208;
}

const HeavyComponent11208 = memo(function HeavyComponent11208({ config }: HeavyProps11208) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11208) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11208 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11208: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11208.displayName = 'HeavyComponent11208';
export default HeavyComponent11208;
