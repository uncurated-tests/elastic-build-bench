'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11873<T> = T extends (infer U)[]
  ? DeepReadonlyArray11873<U>
  : T extends object
  ? DeepReadonlyObject11873<T>
  : T;

interface DeepReadonlyArray11873<T> extends ReadonlyArray<DeepReadonly11873<T>> {}

type DeepReadonlyObject11873<T> = {
  readonly [P in keyof T]: DeepReadonly11873<T[P]>;
};

type UnionToIntersection11873<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11873<T> = UnionToIntersection11873<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11873<T extends unknown[], V> = [...T, V];

type TuplifyUnion11873<T, L = LastOf11873<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11873<TuplifyUnion11873<Exclude<T, L>>, L>;

type DeepPartial11873<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11873<T[P]> }
  : T;

type Paths11873<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11873<K, Paths11873<T[K], Prev11873[D]>> : never }[keyof T]
  : never;

type Prev11873 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11873<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11873 {
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

type ConfigPaths11873 = Paths11873<NestedConfig11873>;

interface HeavyProps11873 {
  config: DeepPartial11873<NestedConfig11873>;
  path?: ConfigPaths11873;
}

const HeavyComponent11873 = memo(function HeavyComponent11873({ config }: HeavyProps11873) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11873) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11873 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11873: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11873.displayName = 'HeavyComponent11873';
export default HeavyComponent11873;
