'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11238<T> = T extends (infer U)[]
  ? DeepReadonlyArray11238<U>
  : T extends object
  ? DeepReadonlyObject11238<T>
  : T;

interface DeepReadonlyArray11238<T> extends ReadonlyArray<DeepReadonly11238<T>> {}

type DeepReadonlyObject11238<T> = {
  readonly [P in keyof T]: DeepReadonly11238<T[P]>;
};

type UnionToIntersection11238<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11238<T> = UnionToIntersection11238<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11238<T extends unknown[], V> = [...T, V];

type TuplifyUnion11238<T, L = LastOf11238<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11238<TuplifyUnion11238<Exclude<T, L>>, L>;

type DeepPartial11238<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11238<T[P]> }
  : T;

type Paths11238<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11238<K, Paths11238<T[K], Prev11238[D]>> : never }[keyof T]
  : never;

type Prev11238 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11238<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11238 {
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

type ConfigPaths11238 = Paths11238<NestedConfig11238>;

interface HeavyProps11238 {
  config: DeepPartial11238<NestedConfig11238>;
  path?: ConfigPaths11238;
}

const HeavyComponent11238 = memo(function HeavyComponent11238({ config }: HeavyProps11238) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11238) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11238 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11238: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11238.displayName = 'HeavyComponent11238';
export default HeavyComponent11238;
