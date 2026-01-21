'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11717<T> = T extends (infer U)[]
  ? DeepReadonlyArray11717<U>
  : T extends object
  ? DeepReadonlyObject11717<T>
  : T;

interface DeepReadonlyArray11717<T> extends ReadonlyArray<DeepReadonly11717<T>> {}

type DeepReadonlyObject11717<T> = {
  readonly [P in keyof T]: DeepReadonly11717<T[P]>;
};

type UnionToIntersection11717<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11717<T> = UnionToIntersection11717<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11717<T extends unknown[], V> = [...T, V];

type TuplifyUnion11717<T, L = LastOf11717<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11717<TuplifyUnion11717<Exclude<T, L>>, L>;

type DeepPartial11717<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11717<T[P]> }
  : T;

type Paths11717<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11717<K, Paths11717<T[K], Prev11717[D]>> : never }[keyof T]
  : never;

type Prev11717 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11717<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11717 {
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

type ConfigPaths11717 = Paths11717<NestedConfig11717>;

interface HeavyProps11717 {
  config: DeepPartial11717<NestedConfig11717>;
  path?: ConfigPaths11717;
}

const HeavyComponent11717 = memo(function HeavyComponent11717({ config }: HeavyProps11717) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11717) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11717 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11717: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11717.displayName = 'HeavyComponent11717';
export default HeavyComponent11717;
