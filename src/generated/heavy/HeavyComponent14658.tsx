'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14658<T> = T extends (infer U)[]
  ? DeepReadonlyArray14658<U>
  : T extends object
  ? DeepReadonlyObject14658<T>
  : T;

interface DeepReadonlyArray14658<T> extends ReadonlyArray<DeepReadonly14658<T>> {}

type DeepReadonlyObject14658<T> = {
  readonly [P in keyof T]: DeepReadonly14658<T[P]>;
};

type UnionToIntersection14658<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14658<T> = UnionToIntersection14658<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14658<T extends unknown[], V> = [...T, V];

type TuplifyUnion14658<T, L = LastOf14658<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14658<TuplifyUnion14658<Exclude<T, L>>, L>;

type DeepPartial14658<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14658<T[P]> }
  : T;

type Paths14658<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14658<K, Paths14658<T[K], Prev14658[D]>> : never }[keyof T]
  : never;

type Prev14658 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14658<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14658 {
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

type ConfigPaths14658 = Paths14658<NestedConfig14658>;

interface HeavyProps14658 {
  config: DeepPartial14658<NestedConfig14658>;
  path?: ConfigPaths14658;
}

const HeavyComponent14658 = memo(function HeavyComponent14658({ config }: HeavyProps14658) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14658) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14658 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14658: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14658.displayName = 'HeavyComponent14658';
export default HeavyComponent14658;
