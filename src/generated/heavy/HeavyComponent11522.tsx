'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11522<T> = T extends (infer U)[]
  ? DeepReadonlyArray11522<U>
  : T extends object
  ? DeepReadonlyObject11522<T>
  : T;

interface DeepReadonlyArray11522<T> extends ReadonlyArray<DeepReadonly11522<T>> {}

type DeepReadonlyObject11522<T> = {
  readonly [P in keyof T]: DeepReadonly11522<T[P]>;
};

type UnionToIntersection11522<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11522<T> = UnionToIntersection11522<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11522<T extends unknown[], V> = [...T, V];

type TuplifyUnion11522<T, L = LastOf11522<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11522<TuplifyUnion11522<Exclude<T, L>>, L>;

type DeepPartial11522<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11522<T[P]> }
  : T;

type Paths11522<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11522<K, Paths11522<T[K], Prev11522[D]>> : never }[keyof T]
  : never;

type Prev11522 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11522<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11522 {
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

type ConfigPaths11522 = Paths11522<NestedConfig11522>;

interface HeavyProps11522 {
  config: DeepPartial11522<NestedConfig11522>;
  path?: ConfigPaths11522;
}

const HeavyComponent11522 = memo(function HeavyComponent11522({ config }: HeavyProps11522) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11522) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11522 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11522: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11522.displayName = 'HeavyComponent11522';
export default HeavyComponent11522;
