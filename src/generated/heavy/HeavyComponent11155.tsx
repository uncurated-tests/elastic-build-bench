'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11155<T> = T extends (infer U)[]
  ? DeepReadonlyArray11155<U>
  : T extends object
  ? DeepReadonlyObject11155<T>
  : T;

interface DeepReadonlyArray11155<T> extends ReadonlyArray<DeepReadonly11155<T>> {}

type DeepReadonlyObject11155<T> = {
  readonly [P in keyof T]: DeepReadonly11155<T[P]>;
};

type UnionToIntersection11155<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11155<T> = UnionToIntersection11155<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11155<T extends unknown[], V> = [...T, V];

type TuplifyUnion11155<T, L = LastOf11155<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11155<TuplifyUnion11155<Exclude<T, L>>, L>;

type DeepPartial11155<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11155<T[P]> }
  : T;

type Paths11155<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11155<K, Paths11155<T[K], Prev11155[D]>> : never }[keyof T]
  : never;

type Prev11155 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11155<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11155 {
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

type ConfigPaths11155 = Paths11155<NestedConfig11155>;

interface HeavyProps11155 {
  config: DeepPartial11155<NestedConfig11155>;
  path?: ConfigPaths11155;
}

const HeavyComponent11155 = memo(function HeavyComponent11155({ config }: HeavyProps11155) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11155) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11155 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11155: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11155.displayName = 'HeavyComponent11155';
export default HeavyComponent11155;
