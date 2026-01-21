'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11445<T> = T extends (infer U)[]
  ? DeepReadonlyArray11445<U>
  : T extends object
  ? DeepReadonlyObject11445<T>
  : T;

interface DeepReadonlyArray11445<T> extends ReadonlyArray<DeepReadonly11445<T>> {}

type DeepReadonlyObject11445<T> = {
  readonly [P in keyof T]: DeepReadonly11445<T[P]>;
};

type UnionToIntersection11445<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11445<T> = UnionToIntersection11445<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11445<T extends unknown[], V> = [...T, V];

type TuplifyUnion11445<T, L = LastOf11445<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11445<TuplifyUnion11445<Exclude<T, L>>, L>;

type DeepPartial11445<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11445<T[P]> }
  : T;

type Paths11445<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11445<K, Paths11445<T[K], Prev11445[D]>> : never }[keyof T]
  : never;

type Prev11445 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11445<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11445 {
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

type ConfigPaths11445 = Paths11445<NestedConfig11445>;

interface HeavyProps11445 {
  config: DeepPartial11445<NestedConfig11445>;
  path?: ConfigPaths11445;
}

const HeavyComponent11445 = memo(function HeavyComponent11445({ config }: HeavyProps11445) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11445) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11445 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11445: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11445.displayName = 'HeavyComponent11445';
export default HeavyComponent11445;
