'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11156<T> = T extends (infer U)[]
  ? DeepReadonlyArray11156<U>
  : T extends object
  ? DeepReadonlyObject11156<T>
  : T;

interface DeepReadonlyArray11156<T> extends ReadonlyArray<DeepReadonly11156<T>> {}

type DeepReadonlyObject11156<T> = {
  readonly [P in keyof T]: DeepReadonly11156<T[P]>;
};

type UnionToIntersection11156<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11156<T> = UnionToIntersection11156<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11156<T extends unknown[], V> = [...T, V];

type TuplifyUnion11156<T, L = LastOf11156<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11156<TuplifyUnion11156<Exclude<T, L>>, L>;

type DeepPartial11156<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11156<T[P]> }
  : T;

type Paths11156<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11156<K, Paths11156<T[K], Prev11156[D]>> : never }[keyof T]
  : never;

type Prev11156 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11156<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11156 {
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

type ConfigPaths11156 = Paths11156<NestedConfig11156>;

interface HeavyProps11156 {
  config: DeepPartial11156<NestedConfig11156>;
  path?: ConfigPaths11156;
}

const HeavyComponent11156 = memo(function HeavyComponent11156({ config }: HeavyProps11156) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11156) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11156 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11156: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11156.displayName = 'HeavyComponent11156';
export default HeavyComponent11156;
