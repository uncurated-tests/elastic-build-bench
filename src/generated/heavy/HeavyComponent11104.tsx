'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11104<T> = T extends (infer U)[]
  ? DeepReadonlyArray11104<U>
  : T extends object
  ? DeepReadonlyObject11104<T>
  : T;

interface DeepReadonlyArray11104<T> extends ReadonlyArray<DeepReadonly11104<T>> {}

type DeepReadonlyObject11104<T> = {
  readonly [P in keyof T]: DeepReadonly11104<T[P]>;
};

type UnionToIntersection11104<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11104<T> = UnionToIntersection11104<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11104<T extends unknown[], V> = [...T, V];

type TuplifyUnion11104<T, L = LastOf11104<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11104<TuplifyUnion11104<Exclude<T, L>>, L>;

type DeepPartial11104<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11104<T[P]> }
  : T;

type Paths11104<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11104<K, Paths11104<T[K], Prev11104[D]>> : never }[keyof T]
  : never;

type Prev11104 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11104<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11104 {
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

type ConfigPaths11104 = Paths11104<NestedConfig11104>;

interface HeavyProps11104 {
  config: DeepPartial11104<NestedConfig11104>;
  path?: ConfigPaths11104;
}

const HeavyComponent11104 = memo(function HeavyComponent11104({ config }: HeavyProps11104) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11104) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11104 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11104: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11104.displayName = 'HeavyComponent11104';
export default HeavyComponent11104;
