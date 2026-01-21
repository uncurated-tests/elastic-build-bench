'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14938<T> = T extends (infer U)[]
  ? DeepReadonlyArray14938<U>
  : T extends object
  ? DeepReadonlyObject14938<T>
  : T;

interface DeepReadonlyArray14938<T> extends ReadonlyArray<DeepReadonly14938<T>> {}

type DeepReadonlyObject14938<T> = {
  readonly [P in keyof T]: DeepReadonly14938<T[P]>;
};

type UnionToIntersection14938<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14938<T> = UnionToIntersection14938<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14938<T extends unknown[], V> = [...T, V];

type TuplifyUnion14938<T, L = LastOf14938<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14938<TuplifyUnion14938<Exclude<T, L>>, L>;

type DeepPartial14938<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14938<T[P]> }
  : T;

type Paths14938<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14938<K, Paths14938<T[K], Prev14938[D]>> : never }[keyof T]
  : never;

type Prev14938 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14938<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14938 {
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

type ConfigPaths14938 = Paths14938<NestedConfig14938>;

interface HeavyProps14938 {
  config: DeepPartial14938<NestedConfig14938>;
  path?: ConfigPaths14938;
}

const HeavyComponent14938 = memo(function HeavyComponent14938({ config }: HeavyProps14938) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14938) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14938 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14938: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14938.displayName = 'HeavyComponent14938';
export default HeavyComponent14938;
