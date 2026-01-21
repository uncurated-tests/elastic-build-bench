'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11226<T> = T extends (infer U)[]
  ? DeepReadonlyArray11226<U>
  : T extends object
  ? DeepReadonlyObject11226<T>
  : T;

interface DeepReadonlyArray11226<T> extends ReadonlyArray<DeepReadonly11226<T>> {}

type DeepReadonlyObject11226<T> = {
  readonly [P in keyof T]: DeepReadonly11226<T[P]>;
};

type UnionToIntersection11226<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11226<T> = UnionToIntersection11226<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11226<T extends unknown[], V> = [...T, V];

type TuplifyUnion11226<T, L = LastOf11226<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11226<TuplifyUnion11226<Exclude<T, L>>, L>;

type DeepPartial11226<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11226<T[P]> }
  : T;

type Paths11226<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11226<K, Paths11226<T[K], Prev11226[D]>> : never }[keyof T]
  : never;

type Prev11226 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11226<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11226 {
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

type ConfigPaths11226 = Paths11226<NestedConfig11226>;

interface HeavyProps11226 {
  config: DeepPartial11226<NestedConfig11226>;
  path?: ConfigPaths11226;
}

const HeavyComponent11226 = memo(function HeavyComponent11226({ config }: HeavyProps11226) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11226) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11226 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11226: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11226.displayName = 'HeavyComponent11226';
export default HeavyComponent11226;
