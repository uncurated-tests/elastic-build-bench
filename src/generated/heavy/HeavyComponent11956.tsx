'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11956<T> = T extends (infer U)[]
  ? DeepReadonlyArray11956<U>
  : T extends object
  ? DeepReadonlyObject11956<T>
  : T;

interface DeepReadonlyArray11956<T> extends ReadonlyArray<DeepReadonly11956<T>> {}

type DeepReadonlyObject11956<T> = {
  readonly [P in keyof T]: DeepReadonly11956<T[P]>;
};

type UnionToIntersection11956<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11956<T> = UnionToIntersection11956<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11956<T extends unknown[], V> = [...T, V];

type TuplifyUnion11956<T, L = LastOf11956<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11956<TuplifyUnion11956<Exclude<T, L>>, L>;

type DeepPartial11956<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11956<T[P]> }
  : T;

type Paths11956<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11956<K, Paths11956<T[K], Prev11956[D]>> : never }[keyof T]
  : never;

type Prev11956 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11956<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11956 {
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

type ConfigPaths11956 = Paths11956<NestedConfig11956>;

interface HeavyProps11956 {
  config: DeepPartial11956<NestedConfig11956>;
  path?: ConfigPaths11956;
}

const HeavyComponent11956 = memo(function HeavyComponent11956({ config }: HeavyProps11956) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11956) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11956 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11956: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11956.displayName = 'HeavyComponent11956';
export default HeavyComponent11956;
