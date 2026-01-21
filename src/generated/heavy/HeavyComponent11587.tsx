'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11587<T> = T extends (infer U)[]
  ? DeepReadonlyArray11587<U>
  : T extends object
  ? DeepReadonlyObject11587<T>
  : T;

interface DeepReadonlyArray11587<T> extends ReadonlyArray<DeepReadonly11587<T>> {}

type DeepReadonlyObject11587<T> = {
  readonly [P in keyof T]: DeepReadonly11587<T[P]>;
};

type UnionToIntersection11587<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11587<T> = UnionToIntersection11587<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11587<T extends unknown[], V> = [...T, V];

type TuplifyUnion11587<T, L = LastOf11587<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11587<TuplifyUnion11587<Exclude<T, L>>, L>;

type DeepPartial11587<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11587<T[P]> }
  : T;

type Paths11587<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11587<K, Paths11587<T[K], Prev11587[D]>> : never }[keyof T]
  : never;

type Prev11587 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11587<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11587 {
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

type ConfigPaths11587 = Paths11587<NestedConfig11587>;

interface HeavyProps11587 {
  config: DeepPartial11587<NestedConfig11587>;
  path?: ConfigPaths11587;
}

const HeavyComponent11587 = memo(function HeavyComponent11587({ config }: HeavyProps11587) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11587) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11587 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11587: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11587.displayName = 'HeavyComponent11587';
export default HeavyComponent11587;
