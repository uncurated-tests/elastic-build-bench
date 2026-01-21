'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11335<T> = T extends (infer U)[]
  ? DeepReadonlyArray11335<U>
  : T extends object
  ? DeepReadonlyObject11335<T>
  : T;

interface DeepReadonlyArray11335<T> extends ReadonlyArray<DeepReadonly11335<T>> {}

type DeepReadonlyObject11335<T> = {
  readonly [P in keyof T]: DeepReadonly11335<T[P]>;
};

type UnionToIntersection11335<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11335<T> = UnionToIntersection11335<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11335<T extends unknown[], V> = [...T, V];

type TuplifyUnion11335<T, L = LastOf11335<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11335<TuplifyUnion11335<Exclude<T, L>>, L>;

type DeepPartial11335<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11335<T[P]> }
  : T;

type Paths11335<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11335<K, Paths11335<T[K], Prev11335[D]>> : never }[keyof T]
  : never;

type Prev11335 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11335<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11335 {
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

type ConfigPaths11335 = Paths11335<NestedConfig11335>;

interface HeavyProps11335 {
  config: DeepPartial11335<NestedConfig11335>;
  path?: ConfigPaths11335;
}

const HeavyComponent11335 = memo(function HeavyComponent11335({ config }: HeavyProps11335) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11335) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11335 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11335: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11335.displayName = 'HeavyComponent11335';
export default HeavyComponent11335;
