'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11843<T> = T extends (infer U)[]
  ? DeepReadonlyArray11843<U>
  : T extends object
  ? DeepReadonlyObject11843<T>
  : T;

interface DeepReadonlyArray11843<T> extends ReadonlyArray<DeepReadonly11843<T>> {}

type DeepReadonlyObject11843<T> = {
  readonly [P in keyof T]: DeepReadonly11843<T[P]>;
};

type UnionToIntersection11843<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11843<T> = UnionToIntersection11843<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11843<T extends unknown[], V> = [...T, V];

type TuplifyUnion11843<T, L = LastOf11843<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11843<TuplifyUnion11843<Exclude<T, L>>, L>;

type DeepPartial11843<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11843<T[P]> }
  : T;

type Paths11843<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11843<K, Paths11843<T[K], Prev11843[D]>> : never }[keyof T]
  : never;

type Prev11843 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11843<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11843 {
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

type ConfigPaths11843 = Paths11843<NestedConfig11843>;

interface HeavyProps11843 {
  config: DeepPartial11843<NestedConfig11843>;
  path?: ConfigPaths11843;
}

const HeavyComponent11843 = memo(function HeavyComponent11843({ config }: HeavyProps11843) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11843) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11843 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11843: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11843.displayName = 'HeavyComponent11843';
export default HeavyComponent11843;
