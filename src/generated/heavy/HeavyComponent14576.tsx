'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14576<T> = T extends (infer U)[]
  ? DeepReadonlyArray14576<U>
  : T extends object
  ? DeepReadonlyObject14576<T>
  : T;

interface DeepReadonlyArray14576<T> extends ReadonlyArray<DeepReadonly14576<T>> {}

type DeepReadonlyObject14576<T> = {
  readonly [P in keyof T]: DeepReadonly14576<T[P]>;
};

type UnionToIntersection14576<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14576<T> = UnionToIntersection14576<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14576<T extends unknown[], V> = [...T, V];

type TuplifyUnion14576<T, L = LastOf14576<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14576<TuplifyUnion14576<Exclude<T, L>>, L>;

type DeepPartial14576<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14576<T[P]> }
  : T;

type Paths14576<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14576<K, Paths14576<T[K], Prev14576[D]>> : never }[keyof T]
  : never;

type Prev14576 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14576<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14576 {
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

type ConfigPaths14576 = Paths14576<NestedConfig14576>;

interface HeavyProps14576 {
  config: DeepPartial14576<NestedConfig14576>;
  path?: ConfigPaths14576;
}

const HeavyComponent14576 = memo(function HeavyComponent14576({ config }: HeavyProps14576) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14576) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14576 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14576: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14576.displayName = 'HeavyComponent14576';
export default HeavyComponent14576;
