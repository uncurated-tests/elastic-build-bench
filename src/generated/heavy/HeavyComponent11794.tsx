'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11794<T> = T extends (infer U)[]
  ? DeepReadonlyArray11794<U>
  : T extends object
  ? DeepReadonlyObject11794<T>
  : T;

interface DeepReadonlyArray11794<T> extends ReadonlyArray<DeepReadonly11794<T>> {}

type DeepReadonlyObject11794<T> = {
  readonly [P in keyof T]: DeepReadonly11794<T[P]>;
};

type UnionToIntersection11794<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11794<T> = UnionToIntersection11794<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11794<T extends unknown[], V> = [...T, V];

type TuplifyUnion11794<T, L = LastOf11794<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11794<TuplifyUnion11794<Exclude<T, L>>, L>;

type DeepPartial11794<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11794<T[P]> }
  : T;

type Paths11794<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11794<K, Paths11794<T[K], Prev11794[D]>> : never }[keyof T]
  : never;

type Prev11794 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11794<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11794 {
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

type ConfigPaths11794 = Paths11794<NestedConfig11794>;

interface HeavyProps11794 {
  config: DeepPartial11794<NestedConfig11794>;
  path?: ConfigPaths11794;
}

const HeavyComponent11794 = memo(function HeavyComponent11794({ config }: HeavyProps11794) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11794) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11794 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11794: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11794.displayName = 'HeavyComponent11794';
export default HeavyComponent11794;
