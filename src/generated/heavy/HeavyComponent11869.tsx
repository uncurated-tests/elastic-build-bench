'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11869<T> = T extends (infer U)[]
  ? DeepReadonlyArray11869<U>
  : T extends object
  ? DeepReadonlyObject11869<T>
  : T;

interface DeepReadonlyArray11869<T> extends ReadonlyArray<DeepReadonly11869<T>> {}

type DeepReadonlyObject11869<T> = {
  readonly [P in keyof T]: DeepReadonly11869<T[P]>;
};

type UnionToIntersection11869<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11869<T> = UnionToIntersection11869<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11869<T extends unknown[], V> = [...T, V];

type TuplifyUnion11869<T, L = LastOf11869<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11869<TuplifyUnion11869<Exclude<T, L>>, L>;

type DeepPartial11869<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11869<T[P]> }
  : T;

type Paths11869<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11869<K, Paths11869<T[K], Prev11869[D]>> : never }[keyof T]
  : never;

type Prev11869 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11869<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11869 {
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

type ConfigPaths11869 = Paths11869<NestedConfig11869>;

interface HeavyProps11869 {
  config: DeepPartial11869<NestedConfig11869>;
  path?: ConfigPaths11869;
}

const HeavyComponent11869 = memo(function HeavyComponent11869({ config }: HeavyProps11869) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11869) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11869 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11869: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11869.displayName = 'HeavyComponent11869';
export default HeavyComponent11869;
