'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11121<T> = T extends (infer U)[]
  ? DeepReadonlyArray11121<U>
  : T extends object
  ? DeepReadonlyObject11121<T>
  : T;

interface DeepReadonlyArray11121<T> extends ReadonlyArray<DeepReadonly11121<T>> {}

type DeepReadonlyObject11121<T> = {
  readonly [P in keyof T]: DeepReadonly11121<T[P]>;
};

type UnionToIntersection11121<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11121<T> = UnionToIntersection11121<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11121<T extends unknown[], V> = [...T, V];

type TuplifyUnion11121<T, L = LastOf11121<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11121<TuplifyUnion11121<Exclude<T, L>>, L>;

type DeepPartial11121<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11121<T[P]> }
  : T;

type Paths11121<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11121<K, Paths11121<T[K], Prev11121[D]>> : never }[keyof T]
  : never;

type Prev11121 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11121<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11121 {
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

type ConfigPaths11121 = Paths11121<NestedConfig11121>;

interface HeavyProps11121 {
  config: DeepPartial11121<NestedConfig11121>;
  path?: ConfigPaths11121;
}

const HeavyComponent11121 = memo(function HeavyComponent11121({ config }: HeavyProps11121) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11121) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11121 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11121: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11121.displayName = 'HeavyComponent11121';
export default HeavyComponent11121;
