'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11536<T> = T extends (infer U)[]
  ? DeepReadonlyArray11536<U>
  : T extends object
  ? DeepReadonlyObject11536<T>
  : T;

interface DeepReadonlyArray11536<T> extends ReadonlyArray<DeepReadonly11536<T>> {}

type DeepReadonlyObject11536<T> = {
  readonly [P in keyof T]: DeepReadonly11536<T[P]>;
};

type UnionToIntersection11536<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11536<T> = UnionToIntersection11536<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11536<T extends unknown[], V> = [...T, V];

type TuplifyUnion11536<T, L = LastOf11536<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11536<TuplifyUnion11536<Exclude<T, L>>, L>;

type DeepPartial11536<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11536<T[P]> }
  : T;

type Paths11536<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11536<K, Paths11536<T[K], Prev11536[D]>> : never }[keyof T]
  : never;

type Prev11536 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11536<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11536 {
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

type ConfigPaths11536 = Paths11536<NestedConfig11536>;

interface HeavyProps11536 {
  config: DeepPartial11536<NestedConfig11536>;
  path?: ConfigPaths11536;
}

const HeavyComponent11536 = memo(function HeavyComponent11536({ config }: HeavyProps11536) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11536) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11536 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11536: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11536.displayName = 'HeavyComponent11536';
export default HeavyComponent11536;
