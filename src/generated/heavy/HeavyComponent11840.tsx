'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11840<T> = T extends (infer U)[]
  ? DeepReadonlyArray11840<U>
  : T extends object
  ? DeepReadonlyObject11840<T>
  : T;

interface DeepReadonlyArray11840<T> extends ReadonlyArray<DeepReadonly11840<T>> {}

type DeepReadonlyObject11840<T> = {
  readonly [P in keyof T]: DeepReadonly11840<T[P]>;
};

type UnionToIntersection11840<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11840<T> = UnionToIntersection11840<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11840<T extends unknown[], V> = [...T, V];

type TuplifyUnion11840<T, L = LastOf11840<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11840<TuplifyUnion11840<Exclude<T, L>>, L>;

type DeepPartial11840<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11840<T[P]> }
  : T;

type Paths11840<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11840<K, Paths11840<T[K], Prev11840[D]>> : never }[keyof T]
  : never;

type Prev11840 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11840<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11840 {
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

type ConfigPaths11840 = Paths11840<NestedConfig11840>;

interface HeavyProps11840 {
  config: DeepPartial11840<NestedConfig11840>;
  path?: ConfigPaths11840;
}

const HeavyComponent11840 = memo(function HeavyComponent11840({ config }: HeavyProps11840) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11840) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11840 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11840: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11840.displayName = 'HeavyComponent11840';
export default HeavyComponent11840;
