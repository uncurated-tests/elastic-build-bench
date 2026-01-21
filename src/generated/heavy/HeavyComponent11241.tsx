'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11241<T> = T extends (infer U)[]
  ? DeepReadonlyArray11241<U>
  : T extends object
  ? DeepReadonlyObject11241<T>
  : T;

interface DeepReadonlyArray11241<T> extends ReadonlyArray<DeepReadonly11241<T>> {}

type DeepReadonlyObject11241<T> = {
  readonly [P in keyof T]: DeepReadonly11241<T[P]>;
};

type UnionToIntersection11241<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11241<T> = UnionToIntersection11241<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11241<T extends unknown[], V> = [...T, V];

type TuplifyUnion11241<T, L = LastOf11241<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11241<TuplifyUnion11241<Exclude<T, L>>, L>;

type DeepPartial11241<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11241<T[P]> }
  : T;

type Paths11241<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11241<K, Paths11241<T[K], Prev11241[D]>> : never }[keyof T]
  : never;

type Prev11241 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11241<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11241 {
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

type ConfigPaths11241 = Paths11241<NestedConfig11241>;

interface HeavyProps11241 {
  config: DeepPartial11241<NestedConfig11241>;
  path?: ConfigPaths11241;
}

const HeavyComponent11241 = memo(function HeavyComponent11241({ config }: HeavyProps11241) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11241) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11241 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11241: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11241.displayName = 'HeavyComponent11241';
export default HeavyComponent11241;
