'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11987<T> = T extends (infer U)[]
  ? DeepReadonlyArray11987<U>
  : T extends object
  ? DeepReadonlyObject11987<T>
  : T;

interface DeepReadonlyArray11987<T> extends ReadonlyArray<DeepReadonly11987<T>> {}

type DeepReadonlyObject11987<T> = {
  readonly [P in keyof T]: DeepReadonly11987<T[P]>;
};

type UnionToIntersection11987<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11987<T> = UnionToIntersection11987<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11987<T extends unknown[], V> = [...T, V];

type TuplifyUnion11987<T, L = LastOf11987<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11987<TuplifyUnion11987<Exclude<T, L>>, L>;

type DeepPartial11987<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11987<T[P]> }
  : T;

type Paths11987<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11987<K, Paths11987<T[K], Prev11987[D]>> : never }[keyof T]
  : never;

type Prev11987 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11987<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11987 {
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

type ConfigPaths11987 = Paths11987<NestedConfig11987>;

interface HeavyProps11987 {
  config: DeepPartial11987<NestedConfig11987>;
  path?: ConfigPaths11987;
}

const HeavyComponent11987 = memo(function HeavyComponent11987({ config }: HeavyProps11987) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11987) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11987 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11987: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11987.displayName = 'HeavyComponent11987';
export default HeavyComponent11987;
